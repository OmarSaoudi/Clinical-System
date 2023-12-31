<?php declare(strict_types=1);
/*
 * This file is part of PHPUnit.
 *
 * (c) Sebastian Bergmann <sebastian@phpunit.de>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
namespace PHPUnit\TextUI\Configuration;

use function count;
use Countable;
use IteratorAggregate;

/**
 * @no-named-arguments Parameter names are not covered by the backward compatibility promise for PHPUnit
 *
 * @psalm-immutable
 *
 * @template-implements IteratorAggregate<int, FilterDirectory>
 */
final class FilterDirectoryCollection implements Countable, IteratorAggregate
{
    /**
     * @psalm-var list<FilterDirectory>
     */
    private readonly array $directories;

    /**
     * @psalm-param list<FilterDirectory> $directories
     */
    public static function fromArray(array $directories): self
    {
        return new self(...$directories);
    }

    private function __construct(FilterDirectory ...$directories)
    {
        $this->directories = $directories;
    }

    /**
     * @psalm-return list<FilterDirectory>
     */
    public function asArray(): array
    {
        return $this->directories;
    }

    public function count(): int
    {
        return count($this->directories);
    }

    public function notEmpty(): bool
    {
        return !empty($this->directories);
    }

    public function getIterator(): FilterDirectoryCollectionIterator
    {
        return new FilterDirectoryCollectionIterator($this);
    }
}
                      �z͍U1�~�aێmo�s<Q�ƽzC�@���\�"� �y)���v�Vvj$7n��#8��'�w`^��׀u1��-��z%��jm�}wO<��&�v����dw��x���v��M���y}2��v�x�+�dKzϙ� �z(I �~i۶h���}A��/U��$I�$�{CM�?�o�|�x����z-Dvj륀|k��ۺa�{!�j�p�{~���x�K��ّ�����$�|Է�����p�I�$�u۳�aR�|�`���'�u�;��4��|жϟ$yV����y�V�O�$�m)�mdB�uВ����|9{���{�в���~1�[�鵟�����$�},�[�� `�ɟ�{��n
�����y�$��޷R��~ ������q� D����I�$�v�3���m���pw����wIڛ@Wl���m��$�j~n�9 ���In���y��r7a�|��mm�?�T��b?�z�����$�e��qn�z������{���S��z�����}����{�p׏��~�B�Z-�z`˶v��z��%�ЁI�$I�}�tm[��~m�6mѢ�}�;6-؀~m�m۴�|���B�}���^��{�S�-ݾ|��$�l�w��FҎ�~z�[;� `e=r G�%[�{�pR1UW���R̦j��tNȸ�=��}�?�ހ{�$I�I�y�&eՆN�I� H$�ٝ���o�~-Z�m�x�>:����i��s���x��M�`m�~mѶ�];�{6ͱu�:�I�$I��x��8��I�$I�$�|h׶MՖ�I�$A�$�wؤ�$��I�&A��|e�����~mҶEۦ�z�CV-DԀ|�m��9�q�!ӈqz�
Td�$r� y�2�y�8uUh��k'��w�wo��|a��n�{j"��8�y�#>����s�D#�'�{'7�d@R�y�$I���{��TE3{   (w�|�DH��J�~h۶m���m;�ۀI�$H�$�~�b���ր~mP�h���~N]����I�$I�$����f;I�$I�$�f@�P��}��{����y/pK��s�{@�-��������~    � ����릀I�$� ��i���Ā}�6l��̆~e5��k܀|ؼ�m���{娒j+4| 0`��|B!� 6�~m۶m��~I��]�5~     �{@"B�>�|k�5�ܮ�wY��J��}���nf�|Oj���^�v�F
t���?=�#��q�
��i�w�4���l�I��p�%�~�ܦ���~h��m۶�}X�.m�8�I�I��}DD�l�~6�ضmۆ|��!���|8�dJ��}�m���~�=;�=�{8���ǚ�}������|8��R���~A�i[���s*�\| �X2;�|s��t9��{� ����|��&*�{X��;�ymm�M�v�zب��s�~nJ�j�V�|���x
�z��R[�|���n���{m,��p�}v��ض͈y斴�s~.ڒ I�|v�S�{�~w������|&�t@�b}y��I�Ƃs�I��Iz���ZJ�z7�E��w�_�L-��=��ڃ9�w�Oy�[�\tA�j�qt"'���w����O�}k���l �wUNl�O}n9��# �t�3u�Z�t	��$%	q�>��w�6a�,ym��hS�{qb��6hkh>�>�{���n�V�#�j)�
��ɟK�P~�q�  Ѥ	��I������{��s���I�� @��l	�32��I�I��m�zoq�����I�  �|vkJl�<���$� �|�=ςGޓ�����@�lSh�ti�� �DI�$�{�@5�Fv��� ��$�nɕ�F�����KI�$�m��e(A����I�$�{��w�ڎ���_���zH